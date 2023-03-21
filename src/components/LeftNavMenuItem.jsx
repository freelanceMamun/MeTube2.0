import React from 'react';

const LeftNavMenuItem = ({ text, icon, action, className }) => {
  return (
    <div
      className={
        'dark:text-slate-300 hover:bg-slate-50 dark:hover:text-slate-50 text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.4] ' +
        className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {text}
    </div>
  );
};

export default LeftNavMenuItem;
