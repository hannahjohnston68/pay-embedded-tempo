import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import PaymentDashboard from "./components/dashboard/PaymentDashboard";
import OnboardingFlow from "./components/onboarding/OnboardingFlow";
import InvoiceCreator from "./components/invoices/InvoiceCreator";
import NotificationSettings from "./components/notifications/NotificationSettings";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<PaymentDashboard />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="/invoices/create" element={<InvoiceCreator />} />
          <Route
            path="/notifications/settings"
            element={<NotificationSettings />}
          />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
