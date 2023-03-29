import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import UserCard from "../../components/UserCard";
import { fetchUsers } from "../../utils/api";
import { User } from "../../types/User";
import { availableNationalities } from "../../constants/nationalities";

type UsersPageProps = {
  users: User[];
};

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  const router = useRouter();
  const { nationality } = router.query;
  const country = availableNationalities.find((country: any) => country.code === nationality);

  if (!users) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Users from {country?.name}</h1>
      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const nationality = params?.nationality as string;
  const users = await fetchUsers(nationality);
  return { props: { users } };
};

export default UsersPage;
