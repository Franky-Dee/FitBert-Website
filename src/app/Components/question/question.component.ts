import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() questionNumber : number = 0;
  paragraph: string = '';
  showZoom: boolean = true;
  selectedWord: string = '';

  constructor(private apiService: ApiService) {}; //Inject ApiService

  selectWord(word: string) {
    this.selectedWord = word;
  }

  createDistractors() {
    if (this.selectedWord) {
      const contentToAdd = this.paragraph.replace(
        this.selectedWord,
        `fib("${this.selectedWord}")`
      );
  
      this.apiService.editCell(5, contentToAdd).subscribe(
        response => {
          console.log('Cell content updated:', response);
        },
        error => {
          console.error('Error updating cell content:', error);
          console.log('Error Status:', error.status);
          console.log('Error Message:', error.message); // Log the error message
        }
      );
    }
  }

  getWordsArray() {
    return this.paragraph.split(' ');
  }
}
