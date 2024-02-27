import { Component } from '@angular/core';

@Component({
  selector: 'app-input-two',
  templateUrl: './input-two.component.html',
  styleUrls: ['./input-two.component.css']
})
export class InputTwoComponent {
  selectedImage: string | ArrayBuffer | null = null;

  handleImageUpload(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      const file = inputElement.files?.[0];

      if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
              this.selectedImage = e.target?.result as string | ArrayBuffer;
          };
          reader.readAsDataURL(file);
      }
  }
}