Examples of XSS and CSP rules to protect us:
- Block reflected XSS
  - Test using this http://localhost:8000/search?key=%3Cimg%20src=a%20onerror=alert(document.cookie)%20/%3E
- Block stored XSS
  - Test using the submit button on http://localhost:8000
- Block unsafe inline script
- Allow safe inline script with nonce
- Allow external scripts from other sources