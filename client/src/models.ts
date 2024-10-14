export interface User
{
    id: number;
    firstName: string;
    lastName:string;
    email: string;
    phoneNumber: string;
    password: string;
    createdOn: string;
    userType: UserType;
    accountStatus: AccountStatus;
}

export enum AccountStatus {
    UNAPPROVED,
    ACTIVE,
    BLOCKED,
}

export enum UserType {
    ADMIN,
    STUDENT,
}


export interface BookCategory{
    id: number;
    category: string;
    subcategory: string;
}


export interface Book{
    id: number;
    title: string;
    author: string;
    price: number;
    isOrdered: boolean;
    bookCategoryId: number;
    bookCategory: BookCategory;
}

export interface BooksByCategory{
    bookCategoryId: number;
    category:string;
    subcategory: string;
    books: Book[];
}