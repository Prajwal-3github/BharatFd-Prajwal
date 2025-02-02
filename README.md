
# Hiring Test for Developers

## Introduction
This project is designed to assess a candidate’s ability to develop a backend system using Django or ExpressJS. It focuses on API development, caching, multilingual support, and best practices in software development.

## Configuration

### Installation
Clone the repository to your local machine:
\`\`\`bash
git clone "[https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git](https://github.com/Prajwal-3github/BharatFd-Prajwal)"
cd YOUR_REPOSITORY
\`\`\`

### Install Dependencies
For Django:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

For ExpressJS:
\`\`\`bash
npm install
\`\`\`

### Setup Environment Variables
Create a \`.env\` file in the project root and configure necessary environment variables.

### Database Migration
For Django:
\`\`\`bash
python manage.py migrate
\`\`\`

For ExpressJS (if using a database):
\`\`\`bash
npx sequelize-cli db:migrate
\`\`\`

### Running the Application
For Django:
\`\`\`bash
python manage.py runserver
\`\`\`

For ExpressJS:
\`\`\`bash
npm start
\`\`\`

## How It Works
This project provides a backend service to manage FAQs with multilingual support. It includes:
- WYSIWYG editor integration for rich text answers.
- REST API with language selection using query parameters.
- Caching mechanism using Redis for fast responses.
- Automatic translations using Google Translate API.
- Admin panel for managing FAQs efficiently.

## Technologies Used
- **Django/ExpressJS**: Backend framework.
- **Redis**: Caching for improved performance.
- **Google Translate API**: Automated translations.
- **pytest/mocha-chai**: Unit testing.
- **Docker**: Containerization support (Bonus).
- **Git**: Version control following commit conventions.

## Contributors
1. **Name** - Prajwal Shivajirao Jadhav  
2. **Email** - prajwalsj93@gmail.com 



## License
This project is licensed under the MIT License.
EOL

