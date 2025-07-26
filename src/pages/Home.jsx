import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  MapPin, 
  Users, 
  AlertTriangle,
  Layers // Icon for GEE/Satellite
} from 'lucide-react';

const Home = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '37.9%',
      label: 'Prevalensi Stunting',
      description: 'Angka stunting di NTT tahun 2023',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: MapPin,
      value: '22',
      label: 'Kabupaten/Kota',
      description: 'Jumlah wilayah administrasi',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Users,
      value: '5.61M',
      label: 'Penduduk',
      description: 'Jumlah Penduduk NTT',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: AlertTriangle,
      value: 'Tinggi',
      label: 'Status Risiko',
      description: 'Kategori risiko stunting',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  // Updated dataSources with image URLs for BPS and Kemenkes
  const dataSources = [
    {
      name: 'Badan Pusat Statistik',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Lambang_Badan_Pusat_Statistik_%28BPS%29_Indonesia.svg',
    },
    {
      name: 'Kementerian Kesehatan',
      logoUrl: 'https://kemkes.go.id/app_asset/image_content/167420049363ca45ad438f30.09191866.png',
    },
    {
      name: 'Citra Satelit',
      logoUrl: 'https://earthengine.google.com/static/images/earth-engine-logo.png', // No logo URL, will use fallback icon
      icon: Layers,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('/assets/Asset 4.svg')`,
              backgroundSize: 'auto 200px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center top',
              filter: 'grayscale(100%) brightness(4) contrast(0.8)'
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 40%, white 100%)'
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-red-600 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Dashboard Prevalensi Stunting
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Dashboard visualiasi data prevalensi stunting untuk mendukung kebijakan yang berbasis data dan tepat sasaran
              di Provinsi Nusa Tenggara Timur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg shadow-sm hover:shadow-md">
                Lihat Dashboard
              </Link>
              {/* <Link to="/dashboard" className="btn-secondary text-lg px-8 py-3">
                Lihat Dashboard
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Pulled up with negative margin */}
      <section className="relative pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-sm font-medium text-gray-900">{stat.label}</div>
                      <p className="text-xs text-gray-500">{stat.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Features & Data Source Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left side: Concise Feature Description */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dashboard Terpadu Prevalensi Stunting
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Jelajahi data prevalensi stunting hasil pemodelan <strong>Small Area Estimation</strong> di Provinsi Nusa Tenggara Timur melalui tampilan yang dashboard interaktif dan inovatif
              </p>
              <Link to="/dashboard" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-base shadow-sm hover:shadow-md">
                Buka Dashboard
              </Link>
            </div>
            
            {/* Right side: Data Source Logos */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">
                Didukung oleh Sumber Data Terpercaya
              </h3>
              <div className="flex flex-col sm:flex-row justify-around items-start text-center gap-8 sm:gap-6">
                {dataSources.map((source) => {
                  const Icon = source.icon;
                  return (
                    <div key={source.name} className="flex flex-col items-center w-full sm:w-1/3">
                      <div className="w-20 h-16 mb-3 flex items-center justify-center">
                        {source.logoUrl ? (
                          <img 
                            src={source.logoUrl} 
                            alt={`${source.name} logo`} 
                            className="max-h-full max-w-full object-contain transition-transform hover:scale-110 duration-300"
                          />
                        ) : (
                          <div className={`flex-shrink-0 w-16 h-16 ${source.bgColor} ${source.iconColor} rounded-full flex items-center justify-center transition-transform hover:scale-110 duration-300`}>
                            <Icon className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                      <p className="font-semibold text-gray-700 text-sm leading-tight">{source.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;