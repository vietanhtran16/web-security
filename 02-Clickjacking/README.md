Examples of Clickjacking and prevention for it:

- Block other sites from being able to iframe trusted site using CSP frame ancestors directive and X-Frame-Options to support older browser
- Still allow sites with same origin to iframe trusted site

Note:
- Frame ancestors directive obsoletes X-Frame-Options header. If resource has both policies, frame ancetors policy should be enforced and Xframe should be ignored

[Reference](https://www.notion.so/shibero/CSP-1eda27d8bf774506858525d0668dd951#0aa1f0810c354e78bed3c8f443099f1b)