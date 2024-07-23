import React, { useState } from 'react';

const AddProduct = () => {
    return (
        <div class="container px-4">
        <div class="row justify-content-center">
          <div class="card border-2 col-md-6 p-3 my-5">
            <h2 class="text-center h2 mt-3 mb-3" style={{color :'#8E4739'}}>Add Product</h2>
            <hr style={{backgroundColor :'#C9A07A'}} />
            <form id="contact-form" name="contact-form" action="#" method="POST">
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" id="name" name="productname" class="form-control" />
                    <label for="name">Product Name</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" id="price" name="price" class="form-control" />
                    <label for="price">Product Price</label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="text" id="title" name="title" class="form-control" />
                    <label for="title">Title</label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="file" id="productimage" name="productimage" class="form-control" />
                    <label for="productimage">Product Image</label>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <div class="form-group">
                    <textarea id="description" name="description" rows="2" class="form-control"></textarea>
                    <label for="description">Description</label>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="text-center col-md-6 mt-4">
                  <button type="submit" class="btn" style={{backgroundColor :'#8E4739',color:'#DDD2C6',fontWeight:'bold'}}>Add Product</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
  );
};

export default AddProduct;
