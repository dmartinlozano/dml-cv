export class CVModel {
    id: string;
    name: string;
    profession: string;
    birthDate: string;
    address: string;
    mobile: string;
    city: string;
    zip: number;
    email: string;
    github: string;
    linkedin: string;
    linkedinShort: string;
    twitter: string;
    twitterShort: string;
    education: {site: string, title: string, duration: string}[];
    workExperience: {resume: string, initDate: string, endDate: string, company: string, client: string, description: string, technologies: string[], frameworks: string[]}[]
}
