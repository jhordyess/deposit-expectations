import React from "react";
import { createRoot } from "react-dom/client";
import Home from "@pages/Home.jsx";
import "@styles/global.sass";

const root = createRoot(document.getElementById("app"));
root.render(<Home />);
