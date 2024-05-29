import React from 'react'

export default function Alert(Props) {
    const capitalize=(word)=>{
     const lower=word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    Props.alert&&
    <div>
        <div className={`alert alert-${Props.alert.type} alert-dismissible fade show`}role="alert">
  <strong>{capitalize(Props.alert.type)}</strong> {Props.alert.msg}
  
</div>
    </div>
  )
}
