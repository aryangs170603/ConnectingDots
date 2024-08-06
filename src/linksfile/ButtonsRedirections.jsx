      // ButtonsRedirections.jsx
      import React from 'react';
      import { Button } from 'react-bootstrap';
      import 'bootstrap/dist/css/bootstrap.min.css';

      const ButtonsRedirections = ({ text, onClick, className }) => {
        return (
          <Button className={className} onClick={onClick}>
            {text}
          </Button>
        );
      };

    
      export default ButtonsRedirections;



