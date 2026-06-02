import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";
import { SidebarContext } from "../../hooks/SidebarContext";
import ContactCard from "./components/ContactCard";
import ContactCardLoading from "./components/ContactCardLoading";

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
        <div className="flex items-center space-x-2 font-mono text-[11px] font-bold tracking-[0.25em] text-white/30 uppercase">
          <span>[01]</span> <span>AVAILABLE_CHANNELS</span>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {loading ? (
            <>
              <ContactCardLoading />
            </>
          ) : (
            contacts.map((c) => <ContactCard key={c.platform_name} {...c} />)
          )}
        </div>
      </MainLayout>
    </SidebarContext>
  );
}
