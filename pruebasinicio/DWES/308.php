<?php
class Persona
{
    public function __construct(
        protected string $nombre,
        protected string $apellidos
    ) {}

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function getApellidos(): string
    {
        return $this->apellidos;
    }

    public function getNombreCompleto(): string
    {
        return $this->nombre . " " . $this->apellidos;
    }

    public static function toHtml(Persona $p): string
    {
        $html = "<p>Nombre: " . htmlspecialchars($p->getNombreCompleto()) . "</p>";
        return $html;
    }
}

class Empleado extends Persona
{
    private static float $sueldoTope = 3333;

    public function __construct(
        string $nombre,
        string $apellidos,
        private float $sueldo = 1000,
        private array $telefonos = []
    ) {
        parent::__construct($nombre, $apellidos);
    }

    public static function getSueldoTope(): float
    {
        return self::$sueldoTope;
    }

    public static function setSueldoTope(float $nuevoTope): void
    {
        self::$sueldoTope = $nuevoTope;
    }

    public function getSueldo(): float
    {
        return $this->sueldo;
    }

    public function setSueldo(float $sueldo): void
    {
        $this->sueldo = $sueldo;
    }

    public function getTelefonos(): array
    {
        return $this->telefonos;
    }

    public function setTelefonos(array $telefonos): self
    {
        $this->telefonos = $telefonos;
        return $this;
    }

    public function debePagarImpuestos(): bool
    {
        return $this->sueldo > self::$sueldoTope;
    }

    public function anyadirTelefono(int $telefono): void
    {
        if (!in_array($telefono, $this->telefonos)) {
            $this->telefonos[] = $telefono;
        }
    }

    public function listarTelefonos(): string
    {
        return implode(", ", $this->telefonos);
    }

    public function vaciarTelefonos(): void
    {
        $this->telefonos = [];
    }

    public static function toHtml(Persona $p): string
    {
        $html = "<p>Nombre: " . htmlspecialchars($p->getNombreCompleto());
        if ($p instanceof Empleado) {
            $html .= "<br>Sueldo: " . htmlspecialchars((string)$p->getSueldo());
            $html .= "<br>Debe pagar impuestos: " . ($p->debePagarImpuestos() ? 'Sí' : 'No');
            $html .= "</p><ol>";
            foreach ($p->getTelefonos() as $tel) {
                $html .= "<li>" . htmlspecialchars((string)$tel) . "</li>";
            }
            $html .= "</ol>";
        } else {
            $html .= "</p>";
        }
        return $html;
    }
}

$empleado = new Empleado("Raul", "Martin Bote", 3500);
$empleado->anyadirTelefono(123456789);
$empleado->anyadirTelefono(987654321);
$empleado->anyadirTelefono(128374656);
echo Empleado::toHtml($empleado);
?>
