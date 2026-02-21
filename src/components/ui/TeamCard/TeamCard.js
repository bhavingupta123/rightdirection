import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from './TeamCard.module.css';

function TeamCard({ member }) {
  const initials = member.name.split(' ').map(n => n[0]).join('');

  return (
    <div className={styles.card}>
      <div className={styles.avatarWrap}>
        <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}>
          {initials}
        </div>
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <span className={styles.role}>{member.role}</span>
      <p className={styles.bio}>{member.bio}</p>
      <div className={styles.social}>
        {member.social.linkedin && (
          <a href={member.social.linkedin} className={styles.socialLink} aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        )}
        {member.social.twitter && (
          <a href={member.social.twitter} className={styles.socialLink} aria-label="Twitter">
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
