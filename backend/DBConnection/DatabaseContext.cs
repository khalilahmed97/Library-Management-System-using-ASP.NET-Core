using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Entities;
namespace backend.DBConnection
{
    public class DatabaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<BookCategory> BookCategories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options){

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder){
                modelBuilder.Entity<User>().HasData(new User()
                {
                    ID = 1,
                    FirstName = "Super",
                    LastName = "Admin",
                    Email = "khalilahmedsharif123@gmail.com",
                    PhoneNumber = "123456789",
                    AccountStatus = AccountStatus.ACTIVE,
                    UserType = UserType.ADMIN,
                    Password = "admin123",
                    CreatedOn = new DateTime(2024, 10, 02, 11, 55, 40),
            });

            
                }
     
            protected override void ConfigureConventions(ModelConfigurationBuilder modelConfigurationBuilder){
                modelConfigurationBuilder.Properties<UserType>().HaveConversion<string>();
                modelConfigurationBuilder.Properties<AccountStatus>().HaveConversion<string>();
            }
        }
        
    }