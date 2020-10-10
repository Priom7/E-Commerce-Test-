import React from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../button/customButton.component";
import { connect } from "react-redux";
import { addItemToShop } from "../../redux/item/item.action";
import "./addForm.style.scss";

class AddItemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      imageUrl: "",
      price: "",
      isAvailable: true
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    try {
      await this.props.addItemToShop(this.state);
      alert("New Item Added on Shop...!!");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { id, name, imageUrl, price } = this.state;

    return (
      <div className='addItem'>
        <h2 className='addItem__Title'>
          Add Item to Your Shop
        </h2>
        <form
          className='addItem__form'
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type='number'
            name='id'
            value={id}
            onChange={this.handleChange}
            label='Enter a random number'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
            label='Item Name'
            required
          ></FormInput>
          <FormInput
            type='text'
            name='imageUrl'
            value={imageUrl}
            onChange={this.handleChange}
            label='Paste image Url Here'
            required
          ></FormInput>
          <FormInput
            type='number'
            name='price'
            value={price}
            onChange={this.handleChange}
            label='Enter Price in tk. (number)'
            required
          ></FormInput>

          <CustomButton type='submit'>
            Add Item
          </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToShop: item => dispatch(addItemToShop(item))
});

export default connect(
  null,
  mapDispatchToProps
)(AddItemForm);
