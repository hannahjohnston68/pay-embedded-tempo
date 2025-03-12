import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { ArrowLeft, Users, Search } from "lucide-react";
import { Input } from "../ui/input";

const AccessLogs = () => {
  const navigate = useNavigate();

  // Mock data for demonstration
  const logs = [
    {
      id: 1,
      user: "john.doe@example.com",
      action: "Login",
      ip: "192.168.1.1",
      timestamp: "2024-01-20 14:30:00",
      status: "Success",
    },
    {
      id: 2,
      user: "jane.smith@example.com",
      action: "Password Change",
      ip: "192.168.1.2",
      timestamp: "2024-01-20 13:15:00",
      status: "Success",
    },
    {
      id: 3,
      user: "john.doe@example.com",
      action: "Payment Settings Update",
      ip: "192.168.1.1",
      timestamp: "2024-01-20 12:45:00",
      status: "Success",
    },
  ];

  return (
    <Layout title="Access Logs">
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/settings")}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Settings
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <Users className="h-5 w-5" />
              Access Logs
            </CardTitle>
            <CardDescription>
              View detailed access logs and security audit trails
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search logs..."
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Export Logs</Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {logs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {log.timestamp}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {log.user}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {log.action}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {log.ip}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {log.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AccessLogs;