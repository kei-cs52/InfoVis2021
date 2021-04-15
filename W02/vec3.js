class Vec3
{
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subtract(v)
    {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    min()
    {
        var min = this.x
        if(min > this.y)
        {
            min = this.y
        }
        if(min > this.z)
        {
            min = this.z
        }
        return min;
    }

    max()
    {
        var max = this.x
        if(max < this.y)
        {
            max = this.y
        }
        if(max < this.z)
        {
            max = this.z
        }
        return max;
    }

    mid()
    {
        if((this.x >= this.y && this.y >= this.z) || (this.x <= this.y && this.y <= this.z))
        {
            return this.y;
        }
        else if((this.y >= this.x && this.x >= this.z) || (this.y <= this.x && this.x <= this.z))
        {
            return this.x;
        }
        else
        {
            return this.z;
        }
    }

    triangle(v2,v3)
    {
        v12 = this.subtract(v2)
        v13 = this.subtract(v3)
        return 0.5 * Math.sqrt((v12.x^2 + v12.y^2 +v12.z^2)*(v13.x^2 + v13.y^2 +v13.z^2)-
        (Math.sqrt(v12.x^2 + v12.y^2 +v12.z^2)*Math.sqrt(v13.x^2 + v13.y^2 +v13.z^2))^2);
    }

    
}
