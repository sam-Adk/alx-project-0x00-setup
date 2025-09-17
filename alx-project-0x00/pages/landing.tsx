import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button"; // ✅ Default export works now

const Landing: React.FC = () => {
  return (
    <div>
      <Card />
      <Button title="Click Me" onClick={() => alert("Clicked!")} />
    </div>
  );
};

export default Landing;


