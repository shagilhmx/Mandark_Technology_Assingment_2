export const getUserData = ({ page }: any) =>
    fetch(
        `https://randomuser.me/api/?results=10&page=${page}`,
    ).then(response => response?.json())
