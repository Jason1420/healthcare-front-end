const cmsServer = 'https://healthcare-cms.onrender.com/'
export const ApiURL = {
    getAllNews: `${cmsServer}api/news?populate=*`,
    getAllServices: `${cmsServer}api/services?populate=*`,
    ApiRegisterForm: `${cmsServer}api/register-forms`,
    ApiIntroduction: `${cmsServer}api/introductions`,
    login: `${cmsServer}api/auth/local`,
    register: `${cmsServer}api/auth/local/register`,
}