import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "./components/home";
import routes from "tempo-routes";
import Invoices from "./components/dashboard/Invoices";
import OnboardingFlow from "./components/onboarding/OnboardingFlow";
import InvoiceCreator from "./components/invoices/InvoiceCreator";
import InvoiceView from "./components/invoices/InvoiceView";
import NotificationSettings from "./components/notifications/NotificationSettings";
import SettingsPage from "./components/settings/SettingsPage";
import PayoutSchedule from "./components/settings/PayoutSchedule";
import ProcessingFees from "./components/settings/ProcessingFees";
import BankAccount from "./components/settings/BankAccount";
import DefaultPaymentMethod from "./components/settings/DefaultPaymentMethod";
import PaymentTerms from "./components/settings/PaymentTerms";
import FraudProtection from "./components/settings/FraudProtection";
import AccessLogs from "./components/settings/AccessLogs";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Invoices />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="/invoices/create" element={<InvoiceCreator />} />
          <Route path="/invoices/:id" element={<InvoiceView />} />
          <Route
            path="/notifications/settings"
            element={<NotificationSettings />}
          />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/settings/payment-method" element={<DefaultPaymentMethod />} />
          <Route path="/settings/payment-terms" element={<PaymentTerms />} />
          <Route path="/settings/payout-schedule" element={<PayoutSchedule />} />
          <Route path="/settings/processing-fees" element={<ProcessingFees />} />
          <Route path="/settings/bank-account" element={<BankAccount />} />
          <Route path="/settings/fraud-protection" element={<FraudProtection />} />
          <Route path="/settings/access-logs" element={<AccessLogs />} />
        </Routes>
        <Toaster />
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
