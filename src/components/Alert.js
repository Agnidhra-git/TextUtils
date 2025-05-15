import React from 'react';

export default function Alert(props) {
  return (
    <div style={{ height: '60px' }}> {/* Fixed height container to prevent CLS */}
      {props.alert && (
        <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
          <div>
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
