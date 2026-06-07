# Урок 46/4. RobustScaler и MaxAbsScaler: когда данные грязные

### RU
Классические StandardScaler и MinMaxScaler ломаются на данных с выбросами. Для реальных данных есть два спасителя.

**RobustScaler — для данных с выбросами**

Использует **медиану и межквартильный размах (IQR)** вместо среднего и std.

Формула:
```
x_scaled = (x - median) / IQR
```
где IQR = Q3 - Q1 (разница между 75-м и 25-м перцентилями).

**Почему это работает:**
- Медиана не чувствительна к выбросам
- IQR игнорирует крайние значения
- Результат — устойчивый к 10-20% грязи в данных

**Пример:**
Зарплаты в компании:
- Нормальные: 50-150 тыс. ₽
- Директор: 1 000 000 ₽
- StandardScaler: данные сожмутся, директор утащит всё
- RobustScaler: нормальные зарплаты останутся в адекватном масштабе

```python
from sklearn.preprocessing import RobustScaler
scaler = RobustScaler()
scaled = scaler.fit_transform(data)
# медиана → 0, IQR → 1
```

**MaxAbsScaler — для разреженных данных (sparse)**

Масштабирует каждое значение на **максимум по модулю**:
```
x_scaled = x / max(|x|)
```

Диапазон: [-1, 1]. Сохраняет разреженность (не создаёт плотные матрицы).

```python
from sklearn.preprocessing import MaxAbsScaler
scaler = MaxAbsScaler()
scaled = scaler.fit_transform(sparse_data)
```

**Когда что использовать — шпаргалка:**

| Тип данных | Лучший Scaler |
|---|---|
| Нормальное распределение, без выбросов | StandardScaler |
| Равномерное, известные границы | MinMaxScaler |
| Есть выбросы, грязные данные | RobustScaler |
| Разреженные данные (one-hot, тексты) | MaxAbsScaler |
| Не знаешь что делать | RobustScaler (безопасный выбор) |

**Типичная ошибка:** По умолчанию тыкать StandardScaler на любые данные. Если есть выбросы — он сломается.

**Практическое правило:** Первым делом смотри на распределение. Есть хвосты и выбросы? → RobustScaler. Аккуратный колокол? → StandardScaler.

---
### EN
- **RobustScaler**: uses median and IQR instead of mean/std. Resistant to outliers.
- **MaxAbsScaler**: scales by absolute maximum. Preserves sparsity (one-hot, text features).

Default choice for real-world dirty data: **RobustScaler**.
