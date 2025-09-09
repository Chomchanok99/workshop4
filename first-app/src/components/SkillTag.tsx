import React from 'react';
import type { SkillLevel } from '../types';

type SkillTagProps = {
  skillName: string;
  level?: SkillLevel;
};

const levelClass = (level?: SkillLevel) => {
  switch (level) {
    case 'Advanced':
      return 'bg-rose-100 text-rose-700 border border-rose-200';
    case 'Intermediate':
      return 'bg-amber-100 text-amber-800 border border-amber-200';
    case 'Beginner':
      return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
    default:
      return 'bg-slate-100 text-slate-700 border border-slate-200';
  }
};

export default function SkillTag({ skillName, level }: SkillTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded px-2 py-1 text-sm ${levelClass(
        level
      )} mr-2 mb-2`}
      title={level ? `Level: ${level}` : undefined}
    >
      <span className="font-medium">{skillName}</span>
      {level && <em className="opacity-80 text-xs">( {level} )</em>}
    </span>
  );
}
