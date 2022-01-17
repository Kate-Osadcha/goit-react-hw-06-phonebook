import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddContactButton from '../AddContactButton';

import s from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  hanldeSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const { contacts } = this.props;
    const normalizedName = name.toLowerCase();

    // Проверка на дубликат по имени
    const nameInContacts = contacts.find(
      contact => contact.name === normalizedName,
    );

    // Проверка на дубликат по номеру
    const numberInContacts = contacts.find(
      contact => contact.number === number,
    );

    // Отправка данных после проверки в экшн
    if (!nameInContacts && !numberInContacts) {
      this.props.onSubmit(normalizedName, number);
      this.resetForm();
      return;
    }
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <form className={s.form} onSubmit={this.hanldeSubmit}>
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Contact name"
              aria-label="Input for your name"
              className={s.input}
              value={this.state.name} // Пишет значение в локальный стейт
              onChange={this.hanldeChange} // Наблюдающий метод
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label className={s.label}>
            Number
            <input
              type="tel"
              name="number"
              placeholder="Phone number"
              aria-label="Input for your phone number"
              className={s.input}
              value={this.state.number} // Пишет значение в локальный стейт
              onChange={this.hanldeChange} // Наблюдающий метод
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </label>

          <AddContactButton />
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
