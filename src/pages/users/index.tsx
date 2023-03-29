import React from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import { availableNationalities } from "../../constants/nationalities";

const Users: React.FC = () => {
  return (
    <Layout>
      <h1>Nationalities</h1>
      <ul>
        {availableNationalities.map((nationality) => (
          <li key={nationality.code}>
            <Link href="/users/[nationality]" as={`/users/${nationality.code}`}>
              {nationality.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Users;
