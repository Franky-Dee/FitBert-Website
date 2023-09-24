import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PDFDocument, rgb } from 'pdf-lib';

@Component({
  selector: 'fbw-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent {
  userInput: string = '';
  generatedText: string = '';
  apiUrl: string = 'http://localhost:5000/api/process-text';
  pressedScrollButton: boolean = false;

  constructor(private http: HttpClient) { }

  sendUserInput(): void {
    const requestBody = {
      user_text: this.userInput
    };

    this.http.post<any>(this.apiUrl, requestBody).subscribe(
      (response) => {
        console.log(response);
        this.generatedText = response.generated_text;
        console.log(this.generatedText);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  async generatePDF() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([1000, 1000]);
    page.drawText(this.generatedText, {
      x: 50,
      y: 300,
      size: 30,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();
    this.downloadPDF(pdfBytes);
  }

  downloadPDF(pdfBytes: Uint8Array) {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated_multiple_choice_quiz.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }

  scrollToBottom(): void {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    this.pressedScrollButton = true;
  }
}
