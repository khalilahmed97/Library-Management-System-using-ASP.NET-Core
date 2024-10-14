import { Component } from '@angular/core';
import { SharedModule } from '../../components/shared-modules';
import { Book, BooksByCategory } from '../../../models';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-book-store',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './book-store.component.html',
  styleUrl: './book-store.component.css'
})
export class BookStoreComponent {
  displayedColumns = [
    "id",
    "title",
    "author",
    "price",
    "isOrdered",
    "order"
  ]
  books: Book[] = [];
  booksToDisplay: BooksByCategory[] = []

  constructor(private apiService: ApiService) {
    this.apiService.getAllBooks().subscribe({
      next: (res: Book[]) => {
        this.books = [];
        res.forEach(b => {
          this.books.push(b)
        });

        this.booksToDisplay = [];
        for (let book of this.books) {
          let categoryExists = false;
          let categoryBook: BooksByCategory | null;


          for (let bookToDisplay of this.booksToDisplay) {
            console.log(bookToDisplay)
            if (bookToDisplay.bookCategoryId == book.bookCategory.id) {
              categoryExists = true;
              categoryBook = bookToDisplay;
            }
          }

          if (categoryExists) {
            categoryBook!.books.push(book)
          }
          else {
            this.booksToDisplay.push({
              bookCategoryId: book.bookCategory.id,
              category: book.bookCategory.category,
              subcategory: book.bookCategory.subcategory,
              books: [book],
            })
          }

        }


      },

      error: (err) => {
        console.log(err)
      }
    })
  }

  searchBooks(value: string) {
    const inputLowerCase = value.toLocaleLowerCase()

    this.booksToDisplay = this.booksToDisplay.filter((bookToDisplay) => {
     bookToDisplay.books.filter(book => {
      return book.title.toLowerCase().includes(inputLowerCase)
     })
      return bookToDisplay.books.length > 0
    })
  }


}
