import s from './AddContactButton.module.scss';

const AddContactButton = () => (
  <div className={s.button__wrapper}>
    <button type="submit" className={s.button}>
      Add contact
    </button>
  </div>
);

export default AddContactButton;
