import { Component, OnInit } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }
  public textareaValue: string = "";
  public textarealast: string = "";
  public value!: Date;
  public mobile!: number;
  public show() {
    this.notificationService.show({
      content: "Your data has been saved !!...",
      cssClass: "button-notification",
      animation: { type: "fade", duration: 400 },
      position: { horizontal: "center", vertical: "bottom" },
      type: { style: "success", icon: true },
      closable: true,
    })
  }

  ngOnInit(): void {
  }

}
