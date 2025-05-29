import React from "react"
import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Meet Our Team
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
