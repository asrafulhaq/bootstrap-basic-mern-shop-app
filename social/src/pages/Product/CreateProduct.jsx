import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

const CreateProduct = () => {


    // form field state 
    const [input, setInput] = useState({
        name : '',
        regular_price : '',
        sale_price : '',
        stock : '',
        photo : '',
        gallery : [],
        file : '',
        gall : '',
        category : [],
        tags : []
    });

    // update form field state 
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));

    }

    // product phto update 
    const handleProductPhoto = (e) => {
        setInput((prevState) => ({
            ...prevState,
            file : e.target.files[0]
        }));
    }




    // handle gallery change 
    const handleProductGallery = (e) => {


        setInput((prevState) => ({
            ...prevState,
            gall : e.target.files
        }));
    }

    // handle category change 
    const handleCategoyChange = (e) => {

        if( e.target.checked ){

            let cats = input.category;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                category : cats
            }));


        }else {
            let cats = input.category;
            const newCats = cats.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                category : newCats
            }));
        }

    }

    // handle tag change
    const handleTagChange  = (e)  => {

        if( e.target.checked ){

            let tags = input.tags;
            tags.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags : tags
            }));


        }else {
            let tags = input.tags;
            const newtags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                tags : newtags
            }));
        }
    } 


    // handle product form 
    const handleProductForm = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('regular_price', input.regular_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock );
        data.append('category', input.category);
        data.append('tags', input.tags);
        data.append('photo', input.file); 

        for( let i= 0; i < input.gall.length ; i++ ){
            data.append('gallery', input.gall[i]);
        }
        


        try {

            await axios.post(`http://localhost:5050/api/v1/product`, data )
            .then( res =>  {
                
                swal({
                    title: "Good job!",
                    text: "Product Added successful!",
                    icon: "success",
                    button: "Aww yiss!",
                  });

                  setInput((prevState) => ({
                    name : '',
                    regular_price : '',
                    sale_price : '',
                    stock : '',
                    photo : [],
                    file : '',
                    category : [],
                    tags : []
                  }));

                  e.target.reset();

            })
            .catch(err => {
                swal({
                    title: "Faild job!",
                    text: "Product Added Failed!",
                    icon: "danger",
                    button: "Aww yiss!",
                  });
            });
            
        } catch (error) {
            console.log(error);
        }



    }


  return (
    <div className='container my-5'>
    <div className="row justify-content-center">
        <div className="col-md-5">
            <Link className='btn btn-primary' to="/admin/product">Back</Link>
            <br />
            <br />
            <div className="card product shadow-sm">
                <div className="card-body">
                <h2>Add new product</h2>
                <hr />
                <form onSubmit={ handleProductForm }>
                    <div className="my-3">
                        <label htmlFor="">Name</label>
                        <input name='name' className='form-control' value={input.name} onChange={ handleInputChange } type="text" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Regular Price</label>
                        <input name='regular_price' className='form-control' type="text" value={input.regular_price} onChange={ handleInputChange } />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Sale Price</label>
                        <input name='sale_price' className='form-control'  type="text" value={input.sale_price} onChange={ handleInputChange } />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Stock</label>
                        <input name='stock' className='form-control' type="text" value={input.stock} onChange={ handleInputChange } />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Photo</label>
                        <input name='photo' className='form-control' onChange={ handleProductPhoto } type="file" />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Gallery</label>
                        <input name='gallery' className='form-control' onChange={ handleProductGallery } type="file" multiple />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Category</label>
                        <hr />
                        <label>
                            <input type="checkbox" value="Men" onChange={ handleCategoyChange } /> Men
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" value="Women" onChange={ handleCategoyChange } /> Women
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" value="Electronic" onChange={ handleCategoyChange } />  Electronic
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" value="Kids" onChange={ handleCategoyChange } /> Kids
                        </label>
                        <br />
                    </div>

                    <div className="my-3">
                        <label htmlFor="">Tags</label>
                        <hr />
                        <label>
                            <input type="checkbox" value="Eid" onChange={handleTagChange} /> Eid
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" value="Puja" onChange={handleTagChange} /> Puja
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" value="Dengu" onChange={handleTagChange} />  Dengu
                        </label>
                        <br />
                    </div>

                    <div className="my-3">
                        <label htmlFor=""></label>
                        <input className='btn btn-primary w-100' type="submit"  value='Create'/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
};

export default CreateProduct;