import React from 'react';
import SkillTag from './SkillTag';
import type { UserData } from '../types';

type Props = {
  user: UserData;
  onViewDetails: (userId: string | number) => void; // เรียกเมื่อกดปุ่ม
};

export default function UserProfileCard({ user, onViewDetails }: Props) {
  const { id, name, email, avatarUrl, isOnline, skills } = user;

  return (
    <article className="card">
      <header className="card-header">
        <div className="avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} />
          ) : (
            <div className="avatar-fallback">{name.charAt(0)}</div>
          )}
        </div>
        <div className="user-meta">
          <h3 className="user-name">{name}</h3>
          <div className="user-email">{email}</div>
          <div className="status">
            <span className={`dot ${isOnline ? 'online' : 'offline'}`} />
            {isOnline ? 'Online' : 'Offline'}
          </div>
        </div>
      </header>

      <section className="card-body">
        <h4 className="section-title">Skills:</h4>
        <div className="skills">
          {skills.map((s, i) => (
            <SkillTag key={i} skillName={s.name} level={s.level} />
          ))}
        </div>
      </section>

      <footer className="card-footer">
        <button
          className="btn-primary"
          onClick={() => onViewDetails(id)}
          aria-label={`View details for ${name}`}
        >
          View Details
        </button>
      </footer>
    </article>
  );
}
