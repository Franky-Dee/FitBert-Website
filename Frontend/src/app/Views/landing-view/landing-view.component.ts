import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'fbw-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent {
  userInput: string = '';
  generatedText: string = '';
  apiUrl: string = 'http://localhost:5000/api/process-text'; // Update this URL if needed

  constructor(private http: HttpClient) {}

  sendUserInput(): void {
    // Create a JSON object with the user's input
    const requestBody = {
      user_text: this.userInput
    };

    // Make a POST request to your Flask backend
    this.http.post<any>(this.apiUrl, requestBody).subscribe(
      (response) => {
        this.generatedText = response.generated_text;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
