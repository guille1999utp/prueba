import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

const FORM_ID = 'payment-form';

export default function WompiReact({ total }) {
  const keyIntegrity = "test_integrity_NJ9gG2rxJW8b03YsbRTL1Aze80RO85eK";

  useEffect(() => {
    const fetchWompi = async () => {
      if (total) {
        const reference = uniqid();
        const cadenaConcatenada = `${reference}${total * 100}COP${keyIntegrity}`
        const encondedText = new TextEncoder().encode(cadenaConcatenada);
        const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://checkout.wompi.co/widget.js';
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-render', "button");
        script.setAttribute('data-public-key', "pub_test_4j2bwMnWjuYijbh7Wmt8aOBhLTzG7xfQ");
        script.setAttribute('data-currency', "COP");
        script.setAttribute('data-amount-in-cents', total * 100);
        script.setAttribute('data-signature:integrity', hashHex);
        const form = document.getElementById(FORM_ID);
        form.appendChild(script);
      }
    }

    fetchWompi();
  }, [total]);

  return (
    <form id={FORM_ID} method="GET" ></form>
  );
}