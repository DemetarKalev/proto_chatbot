import React from 'react';

const TypingIndicator = () => {
   return (
      <div className="flex self-start gap-1 px-3 py-3 bg-gray-200 rounded-xl">
         <Dot />
         <Dot className="" style={{ animationDelay: '0.2s' }} />
         <Dot style={{ animationDelay: '0.4s' }} />
      </div>
   );
};

type DotProps = {
   className?: string;
   style?: React.CSSProperties;
};

const Dot = ({ className = '', style }: DotProps) => (
   <div
      className={`w-2 h-2 rounded-full bg-gray-800 animate-pulse ${className}`}
      style={style}
   ></div>
);

export default TypingIndicator;
