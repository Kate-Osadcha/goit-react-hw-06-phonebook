import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import s from './ContactItem.module.scss';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}</span>
      <a href={`tel:${contact.number}`} className={s.number}>
        {contact.number}
      </a>

      <IconButton onClick={onDeleteContact} aria-label="Delete contact">
        <DeleteIcon width="16px" height="16px" fill="#a7a1a1" />
      </IconButton>
    </li>
  );
};

export default ContactItem;
