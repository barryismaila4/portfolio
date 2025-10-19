import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userMessage: string = '';
  assistantReply: string = '';
  messages: { user: string, assistant: string }[] = [];
  errorMessage: string = '';

  constructor(private apiService: ApiService) {}

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ user: this.userMessage, assistant: '' });
      this.apiService.sendMessage(this.userMessage).subscribe(
        response => {
          this.assistantReply = response.choices[0].message.content;
          this.messages[this.messages.length - 1].assistant = this.assistantReply;
          this.userMessage = ''; // Réinitialiser le champ de message
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    }
  }
}
