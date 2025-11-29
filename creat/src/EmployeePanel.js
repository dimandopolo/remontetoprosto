import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmployeePanel.css';

const API_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:8000' 
  : '/api';

function EmployeePanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState('');
  const [services, setServices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [newService, setNewService] = useState({
    brand: '',
    model: '',
    service: '',
    price: '',
    cost: '',
    duration: '1-2 часа',
    comment: ''
  });

  // Правильный код доступа (можно изменить)
  const correctCode = '7662';

  const handleLogin = (e) => {
    e.preventDefault();
    if (accessCode === correctCode) {
      setIsAuthenticated(true);
    } else {
      alert('Неверный код доступа');
      setAccessCode('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAccessCode('');
  };

  // Получить все услуги
  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_URL}/services/`);
      setServices(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке услуг:', error);
      alert('Не удалось загрузить услуги. Проверьте, запущен ли бэкенд на порту 8000');
    }
  };

  // Открыть модальное окно для добавления
  const openAddModal = () => {
    setEditingService(null);
    setNewService({
      brand: '',
      model: '',
      service: '',
      price: '',
      cost: '',
      duration: '1-2 часа',
      comment: ''
    });
    setShowModal(true);
  };

  // Открыть модальное окно для просмотра/редактирования
  const openViewModal = (service) => {
    setEditingService(service);
    setNewService({
      brand: service.brand || '',
      model: service.model || '',
      service: service.service || '',
      price: service.price || '',
      cost: service.cost || '',
      duration: service.duration || '1-2 часа',
      comment: service.comment || ''
    });
    setShowModal(true);
  };

  // Закрыть модальное окно
  const closeModal = () => {
    setShowModal(false);
    setEditingService(null);
  };

  // Добавить/обновить услугу
  const saveService = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post(`${API_URL}/services/`, {
        ...newService,
        price: parseFloat(newService.price),
        cost: parseFloat(newService.cost),
        device: `${newService.brand} ${newService.model}`.trim()
      });
      
      closeModal();
      fetchServices();
      alert(editingService ? 'Услуга обновлена!' : 'Услуга добавлена!');
    } catch (error) {
      console.error('Ошибка при сохранении услуги:', error);
      alert('Ошибка при сохранении услуги');
    }
  };

  // Удалить услугу
  const deleteService = async (serviceId, e) => {
    e.stopPropagation();
    if (window.confirm('Вы уверены, что хотите удалить эту услугу?')) {
      try {
        await axios.delete(`${API_URL}/services/${serviceId}`);
        fetchServices();
        alert('Услуга удалена!');
      } catch (error) {
        console.error('Ошибка при удалении услуги:', error);
        alert('Ошибка при удалении услуги');
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchServices();
    }
  }, [isAuthenticated]);

  // Фильтрация услуг для поиска
  const filteredServices = services.filter(service =>
    service.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (service.brand && service.brand.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (service.model && service.model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Если не авторизован, показываем экран входа
  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">🔒</div>
            <h1 className="login-title">Доступ к панели сотрудников</h1>
            <p className="login-subtitle">Введите 4-значный код для продолжения</p>
          </div>
          
          <form onSubmit={handleLogin} className="login-form">
  <div className="code-input-container">
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={accessCode}
      onChange={(e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 4);
        setAccessCode(value);
      }}
      className="code-input"
      maxLength={4}
      required
      autoComplete="off"
    />
    <div className="code-dots">
      {[0, 1, 2, 3].map(index => (
        <div 
          key={index} 
          className={`code-dot ${accessCode.length > index ? 'filled' : ''}`}
        />
      ))}
    </div>
  </div>
  
  <button type="submit" className="login-button">
    Войти
  </button>
</form>
          
          <div className="login-hint">
            
          </div>
        </div>
      </div>
    );
  }

  // Основной интерфейс (старый код)
  return (
    <div className="employee-panel">
      <div className="panel-header">
        <h1 className="employee-title">📱 Панель сотрудников</h1>
        <button onClick={handleLogout} className="logout-button">
          🔓 Выйти
        </button>
      </div>
      
      {/* Поиск */}
      <div className="search-container">
        <input 
          type="text"
          placeholder="🔍 Поиск по бренду, модели или услуге..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Кнопка добавления */}
      <button className="floating-add-button" onClick={openAddModal}>
        ➕ Добавить услугу
      </button>

      {/* Список услуг в виде карточек */}
      <div className="services-list">
        <h3 className="list-title">📋 Список услуг ({filteredServices.length})</h3>
        {filteredServices.length === 0 ? (
          <p className="no-services">Нет услуг для отображения</p>
        ) : (
          <div className="services-grid">
            {filteredServices.map(service => (
              <div 
                key={service.id} 
                className="service-card"
                onClick={() => openViewModal(service)}
              >
                <div className="card-header">
                  <div className="device-info">
                    <span className="brand">{service.brand || service.device?.split(' ')[0] || 'Бренд'}</span>
                    <span className="model">{service.model || service.device?.split(' ').slice(1).join(' ') || 'Модель'}</span>
                  </div>
                  <button 
                    onClick={(e) => deleteService(service.id, e)}
                    className="delete-card-button"
                    title="Удалить услугу"
                  >
                    ×
                  </button>
                </div>
                
                <div className="service-name">{service.service}</div>
                
                <div className="card-details">
                  <div className="price">💰 {service.price} руб.</div>
                  <div className="duration">⏱️ {service.duration}</div>
                </div>

                {service.comment && (
                  <div className="comment-preview">
                    {service.comment}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Модальное окно добавления/редактирования */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingService ? 'Просмотр и редактирование услуги' : 'Добавление новой услуги'}</h2>
              <button className="close-button" onClick={closeModal}>×</button>
            </div>
            
            <form onSubmit={saveService} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Бренд *</label>
                  <input
                    type="text"
                    placeholder="Apple, Samsung, Xiaomi..."
                    value={newService.brand}
                    onChange={(e) => setNewService({...newService, brand: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Модель *</label>
                  <input
                    type="text"
                    placeholder="iPhone 12, Galaxy S21..."
                    value={newService.model}
                    onChange={(e) => setNewService({...newService, model: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Услуга *</label>
                <input
                  type="text"
                  placeholder="Замена дисплея, ремонт разъема..."
                  value={newService.service}
                  onChange={(e) => setNewService({...newService, service: e.target.value})}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Цена для клиента (руб) *</label>
                  <input
                    type="number"
                    placeholder="5000"
                    value={newService.price}
                    onChange={(e) => setNewService({...newService, price: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>Себестоимость (руб) *</label>
                  <input
                    type="number"
                    placeholder="3000"
                    value={newService.cost}
                    onChange={(e) => setNewService({...newService, cost: e.target.value})}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Время выполнения *</label>
                <select
                  value={newService.duration}
                  onChange={(e) => setNewService({...newService, duration: e.target.value})}
                  className="form-select"
                  required
                >
                  <option value="30 минут">30 минут</option>
                  <option value="1 час">1 час</option>
                  <option value="1-2 часа">1-2 часа</option>
                  <option value="2-3 часа">2-3 часа</option>
                  <option value="3-4 часа">3-4 часа</option>
                  <option value="1 день">1 день</option>
                  <option value="2-3 дня">2-3 дня</option>
                </select>
              </div>

              <div className="form-group">
                <label>Комментарий</label>
                <textarea
                  placeholder="Дополнительная информация о услуге..."
                  value={newService.comment}
                  onChange={(e) => setNewService({...newService, comment: e.target.value})}
                  className="form-textarea"
                  rows="3"
                />
              </div>

              <div className="modal-actions">
                <button type="button" onClick={closeModal} className="cancel-button">
                  Отмена
                </button>
                <button type="submit" className="save-button">
                  {editingService ? 'Обновить' : 'Добавить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeePanel;