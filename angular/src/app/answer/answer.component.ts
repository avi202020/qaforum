import { Component, OnInit,Input } from '@angular/core';
import {Answer} from '../answer.model';
import {AnswerListService} from '../answerlist.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() ans:Answer;
  constructor(private answerService: AnswerListService) { }

  ngOnInit(): void {
  }

  removeUpvote()
  {
    this.answerService.removeUpvote(this.ans.id,this.ans.question.id,this.ans.question.category.id);
    this.ans.upvotes--;
    this.ans.userUpvoted=false;
  }
  createUpvote()
  {
    this.answerService.createUpvote(this.ans.id,this.ans.question.id,this.ans.question.category.id);
    this.ans.upvotes++;
    this.ans.userUpvoted=true;
  }

}