import axios from 'axios';

const apiBookService = axios.create({
  baseURL: '/api/books'
});

export const createBook = async book => {
  console.log("I am at the post request", book, book.volumeInfo.description, book.volumeInfo.imageLinks.thumbnail)
  try {
    const response = await apiBookService.post(`/add-book`, book);
    return response.data.book;
  } catch (error) {
    throw error;
  }
};

export const getUsersBooks = async user => {
  console.log("I am at the post request", user) 
  try {
    const response = await apiBookService.post(`/get-books`, user);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};