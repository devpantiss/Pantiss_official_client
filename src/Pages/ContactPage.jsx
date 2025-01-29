import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-8 px-6">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Contact us</h1>
          <p className="text-sm text-gray-500 mt-1">
            Last modified on Friday, 17 January 2025
          </p>
        </header>

        <div>
          {/* Headquarters */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Headquarters
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Pantiss Foundation
            </h3>
            <p className="text-gray-600">Plot No 1215/1500,</p>
            <p className="text-gray-600">
              Khandagiri Bari, Bank of India Lane,
            </p>
            <p className="text-gray-600">Bhubaneswar, Odisha, 751030</p>
            <p className="text-gray-600">
              <strong>Tel:</strong> +91 9123456789
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@pantissfoundation.org"
                className="text-blue-600 hover:underline"
              >
                info@pantissfoundation.org
              </a>
            </p>

            {/* Finance Department */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Finance Department
            </h3>
            <p className="text-gray-600">
              <strong>Tel:</strong> +91 9234567890
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:finance@pantissfoundation.org"
                className="text-blue-600 hover:underline"
              >
                finance@pantissfoundation.org
              </a>
            </p>

            {/* HR Department */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              HR Department
            </h3>
            <p className="text-gray-600">
              <strong>Tel:</strong> +91 9345678901
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hr@pantissfoundation.org"
                className="text-blue-600 hover:underline"
              >
                hr@pantissfoundation.org
              </a>
            </p>

            {/* Careers Department */}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              Careers Department
            </h3>
            <p className="text-gray-600">
              <strong>Tel:</strong> +91 9456789012
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:careers@pantissfoundation.org"
                className="text-blue-600 hover:underline"
              >
                careers@pantissfoundation.org
              </a>
            </p>
          </div>

          {/* Training Centers */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Training Centers
          </h2>
          <div className="space-y-6">
            {/* Kalahandi */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Kalahandi</h3>
              <p className="text-gray-600">
                Main Road, Bhawanipatna, Kalahandi, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8245671234
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kalahandi@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  kalahandi@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Angul */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Angul</h3>
              <p className="text-gray-600">
                Plot No. 45, Industrial Area, Angul, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8345672345
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:angul@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  angul@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Jajpur */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Jajpur</h3>
              <p className="text-gray-600">
                NH-5, Near Tata Steel Plant, Jajpur, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8445673456
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jajpur@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  jajpur@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Thuamul Rampur */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Thuamul Rampur
              </h3>
              <p className="text-gray-600">
                Block Office Road, Thuamul Rampur, Kalahandi, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8545674567
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:thuamulrampur@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  thuamulrampur@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Kandhamal */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Kandhamal</h3>
              <p className="text-gray-600">
                Near Phulbani Main Market, Kandhamal, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8645675678
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:kandhamal@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  kandhamal@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Harsuguda */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Harsuguda</h3>
              <p className="text-gray-600">
                Rly Station Road, Jharsuguda, Odisha
              </p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8745676789
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:harsuguda@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  harsuguda@pantissfoundation.org
                </a>
              </p>
            </div>

            {/* Koderma */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Koderma</h3>
              <p className="text-gray-600">Station Road, Koderma, Jharkhand</p>
              <p className="text-gray-600">
                <strong>Tel:</strong> +91 8845677890
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:koderma@pantissfoundation.org"
                  className="text-blue-600 hover:underline"
                >
                  koderma@pantissfoundation.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
