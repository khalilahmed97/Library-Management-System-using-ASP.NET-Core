using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Entities
{
    public class User
    {
        public int ID { get; set; }
        public string FirstName {get; set;} = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string PhoneNumber {get; set;} = string.Empty;
        public DateTime CreatedOn { get; set; }
        public UserType UserType { get; set; } = UserType.NONE;
        public  AccountStatus AccountStatus { get; set; } = AccountStatus.UNAPPROVED;
        
    }
    public class BookCategory{
        public int ID { get; set; }
        public string Category { get; set; } = string.Empty;
        public string SubCategory { get; set; } = string.Empty;
    }

    public class Book {
        public int ID { get; set; }
        public string Author {get; set;} = string.Empty;
        public string Title { get; set; } = string.Empty;
        public float Price { get; set; }
        public bool Ordered { get; set; }
        public int BookCategoryID {get; set;}

        public BookCategory? BookCategory { get; set; }

    }

    public class Order {
        public int ID { get; set; }
        public int UserID {get; set;}
        public int BookID { get; set; }

        public DateTime OrderDate { get; set; }
        public DateTime? ReturnDate { get; set; }

        public bool isReturned {get; set;}
        public int? FinePaid { get; set; }
        public User? User { get; set; }
        public Book? Book { get; set; }

    }

    public enum UserType {
        NONE, ADMIN, STUDENT
    }


    
    public enum AccountStatus {
        ACTIVE, BLOCKED, UNAPPROVED
    }
}