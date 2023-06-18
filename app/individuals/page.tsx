import { GetServerSideProps } from "next";

interface IndividualProps {
    id: string;
    name: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const individuals: IndividualProps[] = await fetch('http://localhost:3000/api/individuals').then((res) => res.json());
    return {
        props: {
            individuals,
        },
    };
};

const IndividualsPage: React.FC<{ individuals: IndividualProps[] }> =  ({individuals}) => {
    return (
        <div>
            <h1>Individuals</h1>
            <ul>
                <li>Name: </li>
            </ul>
        </div>
    );
};

export default IndividualsPage;