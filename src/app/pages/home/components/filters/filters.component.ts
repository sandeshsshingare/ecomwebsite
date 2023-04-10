import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "filters.component.html",
  styles: [],
})
export class FiltersComponent {
  @Output() showCatagory = new EventEmitter<string>();

  categories = ["shoes", "sports"];

  onShowCategory(category: string): void {
    this.showCatagory.emit(category);
  }
}
