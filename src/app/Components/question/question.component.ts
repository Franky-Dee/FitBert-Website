import { Component, Input } from '@angular/core';

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

  selectWord(word: string) {
    this.selectedWord = word;
  }

  getWordsArray() {
    return this.paragraph.split(' ');
  }
}
