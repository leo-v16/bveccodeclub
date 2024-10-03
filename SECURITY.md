# Security Policy

## Supported Versions

This section outlines which versions of the BVEC Code Club Website are actively maintained and supported with security updates. As this is a frontend-only project, security updates will focus on ensuring the website's frontend code is free from vulnerabilities that could affect its users or their data.

| Version             | Supported          |
| ------------------- | ------------------ |
| Main (Latest)       | :white_check_mark: |
| Previous Releases   | :x:                |

We highly encourage contributors to use the latest version of the repository to ensure any security vulnerabilities are addressed.

## Reporting a Vulnerability

If you discover a security vulnerability in the BVEC Code Club Website, please follow these steps to report it securely:

1)Do not open issues or pull requests directly related to security vulnerabilities on GitHub. Instead, use the following private channels to report the vulnerability.

2)How to Report:
Send an email to: [your-email@bvec.ac.in] with details about the vulnerability.
Include a clear description of the vulnerability, steps to reproduce (if applicable), and any relevant code or links.
Provide suggestions for possible fixes or mitigations (if known).

3)What Happens After Reporting:
Once we receive your report, we will acknowledge it within 48 hours and begin investigating the issue.
We will follow up with you to provide any updates or clarifications on the resolution.
If the vulnerability is confirmed, we will work to fix it as quickly as possible and issue an update to the repository.

4)Security Fixes:
If the vulnerability is accepted, we will prioritize creating a fix and releasing a patch.
You will be notified when the vulnerability has been patched, and the changes will be merged into the main branch.
For frontend-only vulnerabilities, such as XSS, CSRF, or other security concerns, we will immediately review and resolve the issues.

5)Security Issues Not Accepted:
If we determine the reported vulnerability is not valid, we will inform you of the decision and provide reasoning.

# Best Practices for Contributors
As a frontend-focused repository, we ask contributors to adhere to the following security best practices to ensure a secure web experience for all users:

1)Sanitize user input: Always sanitize and validate any data that is passed to the frontend.
2)Avoid inline JavaScript: Use external scripts and avoid inline JavaScript to mitigate potential XSS attacks.
3)Use HTTPS: Ensure any links and resources loaded in the website are from secure sources (i.e., use https:// rather than http://).
4)Limit External Dependencies: When adding new external libraries, ensure they are from trusted sources (e.g., CDN providers with strong security practices).
5)Cross-Site Scripting (XSS): Ensure all user-generated content is properly escaped to prevent malicious scripts from being executed in users' browsers.
6)By following these guidelines, we can collectively ensure the security of the website and protect all users.

# Disclosure Policy
We aim for transparency and swift action when addressing security vulnerabilities. After a vulnerability is resolved:

1)We will publicly disclose the fix in the repository's changelog or release notes (if applicable).
2)If needed, we will create a new GitHub release with the patch version that addresses the vulnerability.
3)We are committed to maintaining a secure environment for both contributors and users of the BVEC Code Club Website.

Note: This security policy is tailored to a frontend-only project. It focuses primarily on securing the website's user interface and ensuring no vulnerabilities that could compromise user trust or experience.
