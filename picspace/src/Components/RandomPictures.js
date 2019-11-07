import React from "react";
import axios from 'axios';
import './RandomPictures.css';


class RandomPictures extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: "",
      name : "",
      file_url: "",
      arrayId: [],
      arrayPictures:[],
      //onSelect : false,
      isSelected : false,
      arrayBasket : [],
    }
    this.getIdPicture = this.getIdPicture.bind(this);
    //this.handleClick = this.handleClick.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
  }
 
  getIdPicture() {
    let tempArray = [];
    // Send the request
    axios.get('http://hubblesite.org/api/v3/images/all')
      // Extract the DATA from the received response
      .then(response => {
        for(let i = 0; i < response.data.length; i++) {
          this.state.arrayId.push(response.data[i].id);
        };
       
        for(let y = 0; y < this.state.arrayId.length; y++) {
          axios.get(`http://hubblesite.org/api/v3/image/${this.state.arrayId[y]}`)
          .then(response => {
            if (response.data.image_files !== undefined) {
              tempArray.push(`http://${response.data.image_files[0].file_url}`);
              this.setState({ arrayPictures: tempArray});
            }
          })
        };
      });     
  };
 

  componentDidMount() {
    this.getIdPicture()
  }

  // handleClick = (onSelect) =>{
  //   this.setState({
  //     onSelect : !this.state.onSelect,
  //   })
  // }
  addToBasket(picture){
    this.setState({arrayBasket : [...this.state.arrayBasket, picture]})
  }



  render() {
 
    return (
      <article className="RandomPictures">
      {
      this.state.arrayPictures.map(picture =>
      (<figure className='box-random-pictures' key={picture} >
      <img className='img-random-pictures' src ={picture} alt={picture}/>
      <button className='img-checkbox'  onClick={()=>this.addToBasket(picture)} >Ajouter au panier</button>
      </figure>
          )
        )
      }
    </article>
    );
  }
}
export default RandomPictures;