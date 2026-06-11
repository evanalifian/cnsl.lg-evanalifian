import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import ContactCard from "./components/ContactCard";
import ContactCardLoading from "./components/ContactCardLoading";
import SectionContent from "../../components/SectionContent";

export default function Contacts() {
  const sidebar = {
    sectionName: "COMMUNICATION_HUB",
    title: "Contacts",
    subTitle: "Inquiries & Network Gateways",
    description:
      "Open for engineering collaborations, full-stack development inquiries, or technical research discussions regarding information retrieval systems.",
  };
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getContact() {
      await fetch("/data.json")
        .then((res) => res.json())
        .then((res) => {
          setContacts(res.contacts);
          setLoading(false);
        });
    }

    getContact();
  }, []);

  return (
    <SidebarContext value={sidebar}>
      <MainLayout>
        <SectionContent
          pageName="contacts"
          sectionName="communication_hub"
          title="Communication_Hub"
        >
          <div className="grid grid-cols-1 gap-4">
            {loading ? (
              <>
                <ContactCardLoading />
              </>
            ) : (
              contacts.map((c) => <ContactCard key={c.platform_name} {...c} />)
            )}
          </div>
        </SectionContent>
      </MainLayout>
    </SidebarContext>
  );
}
